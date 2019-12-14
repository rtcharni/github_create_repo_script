# Function to init new code project locally and also on github
# This function should live in .bashrc or .bash_profile to be global function
# Configure paths and github remote url

function createproject () {
    echo "Initializing project: $1"
    echo Please enter git password
    read -sp 'Password: ' password
    # cd
    # cd source/repos/github_create_repo_script
    npm start --silent $1 $password
    wait
    cd ..
    mkdir $1
    cd $1
    touch README.md
    touch .gitignore
    git init
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.com/rtcharni/$1.git
    git push -u origin master
    code .
}
