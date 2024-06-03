@echo off

:: Prompt for the project name
set /p project_name="Enter the project name: "

:: Set up the base project directory
mkdir %project_name%
cd %project_name%

:: Initialize the Yarn workspace
echo { "private": true, "workspaces": ["app/*", "packages/*"] } > package.json

:: Initialize the root TypeScript configuration
echo { "compilerOptions": { "baseUrl": ".", "paths": {} } } > tsconfig.json

:: Create the app directory
mkdir app
cd app

:: Create frontend-client
mkdir frontend-client
cd frontend-client
npx create-next-app@14.2.3 . --ts --use-npm
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p

:: Create directories and files
mkdir styles
echo @tailwind base; > styles/globals.css
echo @tailwind components; >> styles/globals.css
echo @tailwind utilities; >> styles/globals.css

mkdir pages
echo import React from 'react'; > pages/page.tsx
echo const Page = () => <div>Hello from frontend-client</div>; >> pages/page.tsx
echo export default Page; >> pages/page.tsx

:: Update Tailwind configuration
echo module.exports = { content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: {}, }, plugins: [], } > tailwind.config.js

cd ..

:: Create frontend-dashboard
mkdir frontend-dashboard
cd frontend-dashboard
npx create-next-app@14.2.3 . --ts --use-npm
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p

:: Create directories and files
mkdir styles
echo @tailwind base; > styles/globals.css
echo @tailwind components; >> styles/globals.css
echo @tailwind utilities; >> styles/globals.css

mkdir pages
echo import React from 'react'; > pages/page.tsx
echo const Page = () => <div>Hello from frontend-dashboard</div>; >> pages/page.tsx
echo export default Page; >> pages/page.tsx

:: Update Tailwind configuration
echo module.exports = { content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: {}, }, plugins: [], } > tailwind.config.js

cd ..

:: Create backend
mkdir backend
cd backend
yarn init -y
echo { "compilerOptions": { "target": "ES6", "module": "commonjs", "strict": true, "esModuleInterop": true } } > tsconfig.json

mkdir src
echo import React from 'react'; > src/page.tsx
echo const Page = () => <div>Hello from backend</div>; >> src/page.tsx
echo export default Page; >> src/page.tsx

cd ../..

:: Create the packages directory
mkdir packages
cd packages

:: Create ui-components
mkdir ui-components
cd ui-components
yarn init -y
yarn add react react-dom @storybook/react@8.1 @storybook/addon-actions@8.1 @storybook/addon-links@8.1

mkdir src
echo import React from 'react'; > src/page.tsx
echo const Page = () => <div>Hello from ui-components</div>; >> src/page.tsx
echo export default Page; >> src/page.tsx

mkdir .storybook
echo module.exports = { stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"], addons: ["@storybook/addon-links@8.1", "@storybook/addon-essentials@8.1"], }; > .storybook/main.js

echo { "compilerOptions": { "jsx": "react-jsx", "module": "ESNext", "target": "ESNext", "strict": true, "esModuleInterop": true, "skipLibCheck": true, "forceConsistentCasingInFileNames": true } } > tsconfig.json

cd ..

:: Create libs
mkdir libs
cd libs
yarn init -y
echo { "compilerOptions": { "target": "ES6", "module": "commonjs", "strict": true, "esModuleInterop": true } } > tsconfig.json

mkdir src
echo import React from 'react'; > src/page.tsx
echo const Page = () => <div>Hello from libs</div>; >> src/page.tsx
echo export default Page; >> src/page.tsx

cd ../..

:: Install dependencies
yarn install

:: Completed
echo Project setup complete.
pause
