install:
	sudo npm install -g
start:
	npm run babel-node -- src/bin/brain-games.js
publish:
	npm publish
lint:
	sudo npm run eslint
