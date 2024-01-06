# Clone the repository
git clone https://github.com/your-username/blog-website.git

# Move into the project directory
cd blog-website

# Create package.json and initialize npm
npm init -y

# Install required dependencies
npm install express mongoose ejs

# Create app.js file
echo "const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(\`Server is running on http://localhost:\${PORT}\`);
});
" > app.js

# Create public folder for static assets
mkdir public

# Create views folder for templates
mkdir views

# Create style.css file
echo "/* Add your styles here */" > public/style.css

# Create index.html file
echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"stylesheet\" href=\"/style.css\">
    <title>Blog Website</title>
</head>
<body>
    <h1>Welcome to the Blog Website</h1>

    <!-- Add your HTML content here -->

    <script>
        // Add your JavaScript here
    </script>
</body>
</html>
" > views/index.html

# Create README.md file
echo "# Blog Website

This is a simple blog website built using Node.js, Express, and MongoDB.

## Features

- Create new blog posts with a title and content.
- View a list of existing blog posts.
- Dynamic rendering of posts using JavaScript.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB server running

## Getting Started

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/your-username/blog-website.git
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   cd blog-website
   npm install
   \`\`\`

3. Set up MongoDB:

   - Make sure MongoDB is installed and running.
   - Update the MongoDB connection string in \`app.js\` with your own connection details.

4. Run the server:

   \`\`\`bash
   npm start
   \`\`\`

   The server will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

- Access the website in your browser.
- Create new blog posts by navigating to [http://localhost:3000](http://localhost:3000).
- View existing posts on the main page.

## Folder Structure

- \`public\`: Static assets (CSS, client-side JavaScript).
- \`views\`: HTML/EJS templates.
- \`app.js\`: Express application setup.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
" > README.md

# Initialize a new Git repository
git init

# Add all files to the repository
git add .

# Make the initial commit
git commit -m "Initial commit"

# Print instructions for the user
echo "
Your project structure has been set up. Follow the instructions below:

1. Open a new terminal and start your MongoDB server.
2. Update the MongoDB connection string in app.js.
3. Run the server: npm start
4. Access your website at http://localhost:3000
5. Open views/index.html and start building your HTML and JavaScript content.

Happy coding!
"
