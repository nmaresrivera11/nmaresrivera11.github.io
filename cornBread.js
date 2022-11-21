// make an alert so I know this page is connected

// creating a function that takes in a <td>
//  and turns that <td>'s inner HTML into an emoji

const emojiMaker = (id) => {
  if (id === "glass") {
    document.getElementById(id).innerHTML = "🍸";
  } else if (id === "ceramic") {
    document.getElementById(id).innerHTML = "🪴";
  } else {
    document.getElementById(id).innerHTML = "🍳";
  }
};
