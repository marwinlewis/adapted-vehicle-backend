import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    aboutContent: Schema.Attribute.Blocks;
    aboutTitle: Schema.Attribute.String;
    contact: Schema.Attribute.Component<'footer.link-collection', false>;
    quickLinks: Schema.Attribute.Component<'footer.link-collection', true>;
    quickLinkTitle: Schema.Attribute.String;
  };
}

export interface FooterLinkCollection extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_collections';
  info: {
    displayName: 'linkCollection';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PhonePhone extends Struct.ComponentSchema {
  collectionName: 'components_phone_phones';
  info: {
    displayName: 'Phone';
  };
  attributes: {
    phone: Schema.Attribute.BigInteger;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.footer': FooterFooter;
      'footer.link-collection': FooterLinkCollection;
      'phone.phone': PhonePhone;
      'seo.seo': SeoSeo;
    }
  }
}
