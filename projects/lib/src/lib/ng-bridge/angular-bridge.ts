import { OID } from '@elemental-concept/oid';

class AngularBridge {
  storage: { [ key: number ]: any } = {};

  register = (classRef: any, instance: any) => this.storage[ OID(classRef) ] = instance;

  get = (classRef: any) => this.storage[ OID(classRef) ];
}

export const angularBridge = new AngularBridge();
