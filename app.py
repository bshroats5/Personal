from flask import Flask, render_template, url_for

# Initialize the Flask application
app = Flask(__name__)

# Define the route for the home page
@app.route('/')
def index():
    # This will find and render your index.html file
    return render_template('index.html')

# Define routes for your other pages (even if they don't exist yet)
# This makes the links in your navigation bar work.
@app.route('/about')
def about():
    # For now, we can just show the index page again as a placeholder
    return render_template('index.html') 

@app.route('/past-work')
def past_work():
    return render_template('past-work.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

# Define a route for the 404 error page
@app.errorhandler(404)
def page_not_found(e):
    # Render a custom 404 error page
    return render_template('404.html'), 404

# This allows you to run the server by executing 'python app.py'
if __name__ == '__main__':
    app.run(debug=True)