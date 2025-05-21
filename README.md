# `<current-date>` Web Component

A lightweight custom element (`<current-date>`) that inserts the current date into static HTML pages.

## Features

- Configure using HTML attributes:
  - `locale` — e.g. `en-GB`, `fr-FR`; default value: `en-gb`
  - `timezone` — e.g. `Europe/London`, `UTC`, default value: `Europe/London`
  - `format` — simple string to define what parts of the date to show. It should be capable of using all properties and values in https://tc39.es/ecma402/#table-datetimeformat-components. Each property and value pair must be enclosed in square braces - i.e. `[[day 2-digit]]/[[month 2-digit]]/[[year 2-digit]]` (writes the date in `DD/MM/YYYY` format). Default value: `[[day numeric]] [[month long]] [[year numeric]]` writes the longer form date common in the UK - i.e. 7 April 2025.
  
## Usage

Include the build script:

```html
<script src="/script/currentDate.min.js" defer></script>
```

Use the component in your HTML:

If you use it without any attributes, it will give the current date in the British standard according to the London, UK timezone - e.g. 1 May 2025, 19 May 2025.

```html
<current-date>
  7 April 2025
</current-date>
```

You can override the defaults by providing a new attribute value for the desired setting(s):

The following will still give the time in the London, UK timezone in British English. The format of the results will be subtly different because of the custom format attribute. Single digit days will now have a leading zero and the months will have shortened names, eg: 01 Apr 2025, 19 Apr 2025.

```html
<current-date format="[[day 2-digit]] [[month short]] [[year numeric]]">
  7 Apr 2025
</current-date>
```

## Build

```bash
npm install
npm run build
```

## License

MIT
