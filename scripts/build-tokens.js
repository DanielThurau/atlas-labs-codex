/**
 * Token Build Script
 * 
 * Transforms tokens.json into CSS custom properties.
 * Run with: node scripts/build-tokens.js
 */

const fs = require('fs');
const path = require('path');

const TOKENS_PATH = path.join(__dirname, '../tokens/tokens.json');
const OUTPUT_DIR = path.join(__dirname, '../themes/css');

function isTokenValue(obj) {
  return typeof obj === 'object' && obj !== null && 'value' in obj && 'type' in obj;
}

function resolveReference(value, tokens) {
  if (!value.startsWith('{') || !value.endsWith('}')) {
    return value;
  }
  
  const pathParts = value.slice(1, -1).split('.');
  let current = tokens;
  
  for (const key of pathParts) {
    if (typeof current === 'object' && current !== null && key in current) {
      current = current[key];
    } else {
      return value;
    }
  }
  
  if (isTokenValue(current)) {
    return resolveReference(current.value, tokens);
  }
  
  return value;
}

function flattenTokens(obj, prefix, tokens, theme) {
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const varName = prefix ? `${prefix}-${key}` : key;
    
    if (isTokenValue(value)) {
      result[varName] = resolveReference(value.value, tokens);
    } else if (typeof value === 'object' && value !== null) {
      if ('light' in value && 'dark' in value && isTokenValue(value.light) && isTokenValue(value.dark)) {
        if (theme) {
          const themedValue = theme === 'light' ? value.light : value.dark;
          result[varName] = resolveReference(themedValue.value, tokens);
        }
      } else {
        Object.assign(result, flattenTokens(value, varName, tokens, theme));
      }
    }
  }
  
  return result;
}

function generateCSS(vars, selector) {
  const lines = Object.entries(vars)
    .map(([name, value]) => `  --${name}: ${value};`)
    .join('\n');
  
  return `${selector} {\n${lines}\n}\n`;
}

function main() {
  const tokensRaw = fs.readFileSync(TOKENS_PATH, 'utf-8');
  const tokens = JSON.parse(tokensRaw);
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  const primitiveVars = flattenTokens(tokens.primitive, '', tokens);
  const semanticLightVars = flattenTokens(tokens.semantic, '', tokens, 'light');
  const semanticDarkVars = flattenTokens(tokens.semantic, '', tokens, 'dark');
  const componentVars = flattenTokens(tokens.component, '', tokens);
  
  const baseCSS = `/* Auto-generated from tokens.json */
/* Do not edit directly */

${generateCSS(primitiveVars, ':root')}
${generateCSS(componentVars, ':root')}`;
  
  const lightCSS = `/* Auto-generated from tokens.json */
/* Do not edit directly */

${generateCSS(semanticLightVars, ':root, [data-theme="light"]')}`;
  
  const darkCSS = `/* Auto-generated from tokens.json */
/* Do not edit directly */

${generateCSS(semanticDarkVars, '[data-theme="dark"]')}`;
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'base.css'), baseCSS);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'theme-light.css'), lightCSS);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'theme-dark.css'), darkCSS);
  
  console.log('✓ Generated themes/css/base.css');
  console.log('✓ Generated themes/css/theme-light.css');
  console.log('✓ Generated themes/css/theme-dark.css');
}

main();

