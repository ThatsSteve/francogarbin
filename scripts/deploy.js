import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

console.log('🚀 Avvio del deployment di produzione per francogarbin.it...');

// 1. Assicurati che public/.nojekyll e public/CNAME esistano
const cnamePath = path.join(rootDir, 'public', 'CNAME');
const nojekyllPath = path.join(rootDir, 'public', '.nojekyll');
if (!fs.existsSync(cnamePath)) fs.writeFileSync(cnamePath, 'francogarbin.it\n');
if (!fs.existsSync(nojekyllPath)) fs.writeFileSync(nojekyllPath, '');

// 2. Compila il bundle di produzione
console.log('📦 Compilazione bundle Vite...');
execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });

// 3. Copia 404.html e .nojekyll in dist
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

// 4. Inizializza temporaneamente git in dist e invia a francogarbin main
console.log('📤 Invio del bundle compilato al branch main di francogarbin...');
const gitDir = path.join(distDir, '.git');
if (fs.existsSync(gitDir)) {
  fs.rmSync(gitDir, { recursive: true, force: true });
}

execSync('git init', { cwd: distDir, stdio: 'pipe' });
execSync('git remote add origin https://github.com/ThatsSteve/francogarbin.git', { cwd: distDir, stdio: 'pipe' });
execSync('git add -A', { cwd: distDir, stdio: 'pipe' });
execSync('git commit -m "Deploy produzione compilata per francogarbin.it"', { cwd: distDir, stdio: 'pipe' });
execSync('git push origin HEAD:main --force', { cwd: distDir, stdio: 'inherit' });

// Pulisci .git in dist per sicurezza
fs.rmSync(path.join(distDir, '.git'), { recursive: true, force: true });

console.log('✅ Deployment completato con successo su https://francogarbin.it!');
