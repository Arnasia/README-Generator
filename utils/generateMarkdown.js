// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return`![badge](https://img.sheilds.io/badge/license-${license}-blue)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `*[license](license)`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {console.log(data)
  return `# ${data.title}

  ${licenseBadge(data.license)}
  
  ## TITLE
  # ${data.title}

  ## DESCRIPTION
  # ${data.description}

  ## Installation
  # ${data.installation}

  ## Usage
  # ${data.usage}

  ## Contributors
  # ${data.contributors}

  ## License
  # ${data.license}

  ## Features
  # ${data.features}

  ## How to Contribute
  # ${data.howtocontribute}

  ## Tests
  # ${data.tests}

  ## Application Link
  # ${data.link}

  ## GitHub
  # ${data.github}

 ## Questions
 If you have any questions, please submit them to ${data.contact}

 ## Contact
 ${data.creator}
 ${data.contact}`;
}

module.exports = generateMarkdown;
