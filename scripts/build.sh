cd frontend
npm run build
cd ..
if [ -d "backend/frontend-build" ]; then rm -Rf "backend/frontend-build"; fi
cp -R frontend/build/. backend/frontend-build/