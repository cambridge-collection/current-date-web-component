class CurrentDateWidget extends HTMLElement {
  private defaults = {
    locale: 'en-GB',
    timezone: 'Europe/London',
    format: '[[day numeric]] [[month long]] [[year numeric]]'
  };

  constructor() {
    super();
  }

  connectedCallback(): void {
    this.render();
  }

  private render(): void {
    let locale = this.getAttribute('locale') || this.defaults.locale;
    let timeZone = this.getAttribute('timezone') || this.defaults.timezone;
    let formatStr = this.getAttribute('format') || this.defaults.format;

    const now = new Date();
    let output: string;

    const doRender = () => {
      const segments = formatStr.split(/(\[\[[^\]]+\]\])/);
      output = '';

      for (const seg of segments) {
        const m = seg.match(/^\[\[([\s\S]+?)\]\]$/);
        if (!m) {
          output += seg;
        } else {
          const [prop, ...valParts] = m[1].trim().split(/\s+/);
          let value: any = valParts.join(' ');

          const opts: Intl.DateTimeFormatOptions = { timeZone };
          (opts as any)[prop] = value;

          output += new Intl.DateTimeFormat(locale, opts).format(now);
        }
      }
    };

    try {
      doRender();
    } catch (err) {
      console.warn(
          'Invalid attribute value detected—falling back to defaults.',
          err
      );
      locale    = this.defaults.locale;
      timeZone  = this.defaults.timezone;
      formatStr = this.defaults.format;
      doRender();
    }

    this.textContent = output!;
  }
}

customElements.define('current-date', CurrentDateWidget);
export { CurrentDateWidget };
