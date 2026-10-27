//your code here

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "A Day to Remember",
  "The Rolling Stones",
  "Bring Me the Horizon",
  "The Beatles",
  "Aerosmith",
  "Anberlin",
  "The Amity Affliction"
];

const sortedBands = bands.sort((a, b) => {
  const nameA = a.replace(/^(a |an |the )/i, "");
  const nameB = b.replace(/^(a |an |the )/i, "");

  return nameA.localeCompare(nameB);
});

document.querySelector("ul").id = "bands";

document.querySelector("ul").innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join("");

