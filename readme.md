# FAQ Search

This is a simple FAQ search implementation that allows users to search for
questions and find corresponding answers from a list of FAQ cards. The styling
is minimal so it can be used to match the needed styles.

## Usage

- Include the necessary HTML and CSS code in your webpage.
- Add FAQ cards to the `<div id="generalQA">` container. Each FAQ card should
  have a title and a body.
- Include the JavaScript code in the main.js file or within a `<script>` tag.

## How it Works

- The JavaScript code retrieves the necessary DOM elements, including the search
  input, the container for FAQ cards, and the element to display a message when
  there are no search results.
- It creates an array (generalQuestions) to store all the FAQ cards.
  - It converts the search query to lowercase for case-insensitive matching.
  - It iterates over each FAQ card and checks if the card's content (title and
    body) includes the search query. If a match is found, the card is displayed
    (display: block); otherwise, it is hidden (display: none).
  - If none of the FAQ cards match the search query, a "No matches found"
    message is displayed. Otherwise, the message is hidden.
  - If the search input is empty, all FAQ cards are displayed.

## Customization

You can customize the FAQ search implementation to suit your needs. Here are
some possible modifications:

- Styling: Modify the CSS classes and styles to match your website's design.
- Expand functionality: Add additional features such as filtering by category or
  displaying search suggestions.
- Data source: Retrieve FAQ data from an API or a backend server instead of
  hardcoding it in the HTML.
