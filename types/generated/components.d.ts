import type { Schema, Struct } from '@strapi/strapi';

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
      'phone.phone': PhonePhone;
      'seo.seo': SeoSeo;
    }
  }
}
