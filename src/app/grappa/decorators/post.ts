import { Registry } from '../core/registry/registry';

export function POST(endpoint: string) {
  return (target: any, property: string) => {
    Registry.registerRequest('POST', endpoint, target, property);
  };
}
