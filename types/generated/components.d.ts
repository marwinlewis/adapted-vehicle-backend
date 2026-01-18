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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'phone.phone': PhonePhone;
    }
  }
}
