# flask-react-example
This repo is a template for a simple single page Flask + React web app.

## To install:
First, ensure `python3` and `pip3` are installed. You can install them with [Homebrew](https://brew.sh/) like so:

1. Install Homebrew - `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
`
1. Install python3/pip3 - `brew install python3`

Then do the following:
1. Download the files in this git repo: `git clone https://github.com/adamzu/flask-react-example.git` or do it manually from the webpage
1. Install [virtualenv](https://virtualenv.pypa.io/en/latest/) - `pip install virtualenv`
1. Create a virtual environment: `virtualenv -p python3 venv`
1. Activate the virtual environment: `. venv/bin/activate`
1. Install the Python dependencies: `pip install -r requirements.txt`
1. Install node/npm: `brew install node`
1. Install the Javascript dependencies: `npm install package.json`
1. Replace the line with `PATH` in `~/.bash_profile` (or add it if it's not there) with the following: `PATH="$HOME/bin:$HOME/.local/bin:./node_modules/.bin:$PATH"`
1. Update your computer to recognize the new PATH: `. ~/.bash_profile`

## To run:
Run the following:
1. `export FLASK_APP=myapp`
1. `export FLASK_DEBUG=1`
1. `source venv/bin/activate`
1. `webpack --watch &`
1. `python run.py`

Or you can just run my setup script that does all this:
`bash setup.sh`
