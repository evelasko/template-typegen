# template-typegen

Context object type generator for Handlebars (.hbs) and Mjml (.mjml) template files.

## Usage
template-typegen <pathToTemplatesFolder> <pathToOutputFolder>

Scans all hbs and mjml files in pathToTemplatesFolder, creates export types named as the file with all context {{variables}} found and saves in pathToOutputFile