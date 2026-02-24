@echo off
cd /d "%~dp0"
git add content\*.md
git commit -m "update content"
git pull --rebase
git push
echo.
echo Published! Changes will be live in ~30 seconds.
pause
