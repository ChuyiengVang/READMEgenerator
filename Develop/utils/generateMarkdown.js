// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'MPL 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === 'IPL 1.0') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, instaInstru, usageInfo, license, contGuide, testInstru, email, github}) {
  console.log();
  return `
  ## ${title}

  ${renderLicenseBadge(license)}
  
  ${description}
  
  ## Table of Contents
  
  * [Usage](#usage)
  * [Installation](#installation)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Question](#question)

  ## Usage
  
  ${usageInfo}
  
  ## Installation

  ${instaInstru}

  ## License

  License used: ${license}

  For more information about the license please visit [https: //choosealicense.com/](https://choosealicense.com/)
  
  ## Contributing
  
  ${contGuide}
  
  ## Test
  
  ${testInstru}
  
  ## Question

  You may contact me with ny questions at:
  
  Email: [${email}](${email})<br>
  Github: [github.com/${github}](https://github.com/${github})`;
  
}



module.exports = generateMarkdown;
