import { Server } from 'miragejs';
import { IAccount } from './types/types';

export const startMirage = () => {
  return new Server({
    routes() {
      this.namespace = '/api';

      this.get('/accounts', () => {
        const accounts: IAccount[] = [
          {
            id: 1,
            login: 'asd',
            name: 'asd',
            surname: 'asd',
            role: 'role',
            password: '123',
            specializations: [{ id: 1, specialization: 'Врач' }],
          },
          {
            id: 2,
            login: 'asd2',
            name: 'asd2',
            surname: 'asd2',
            role: 'role2',
            password: '123',
            specializations: [{ id: 1, specialization: 'Врач2' }],
          },
          {
            id: 3,
            login: 'asd3',
            name: 'asd3',
            surname: 'asd4',
            role: 'role4',
            password: '123',
            specializations: [{ id: 1, specialization: 'Врач3' }],
          },
        ];

        return accounts;
      });

      this.post('/accounts', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = Date.now();

        return attrs;
      });

      this.delete('/account/:id', (schema, request) => {
        let id = +request.params.id;
        return { id };
      });
    },
  });
};
