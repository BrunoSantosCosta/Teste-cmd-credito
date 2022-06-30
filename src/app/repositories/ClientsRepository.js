let clients = [
  {
    name: 'bruno',
    cpf: '09685288992', // (max 11 digits) - Single Element*
    address: [{
      cep: '88101400', //**(eight digits)*
      publicPlace: 'Avenida Governador Adolfo Konder',
      city: 'sj',
      uf: 'ssp',
    }],
    telephone: [{
      ddd: '40', //**(two digits)*
      number: '984974812',
    }, //**(max 9 digits)*
    ],
  }, //**financial (array of objects)** **account_balance*: Number **(two numbers after the comma)*
  {
    name: 'fulano',
    cpf: '62626194', // (max 11 digits) - Single Element*
    address: [{
      cep: '88101300', //**(eight digits)*
      publicPlace: 'rua do zezinho',
      city: 'jubileu',
      uf: 'sc',
    }],
    telephone: [{
      ddd: '99', //**(two digits)*
      number: '98497481',
    }, //**(max 9 digits)*
    ],
  }, //**financial (array of objects)** **account_balance*: Number **(two numbers after the comma)*

];
class ClientsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(clients);
    });
  }

  findByDel(cpf) {
    return new Promise((resolve) => resolve(
      clients.find((client) => client.cpf === cpf),
    ));
  }

  delete(cpf) {
    return new Promise((resolve) => {
      clients = clients.filter((client) => client.cpf === !cpf);
      resolve();
    });
  }

  findByCpf(cpf) {
    return new Promise((resolve) => resolve(
      clients.find((client) => client.cpf === cpf),
    ));
  }

  create({
    name, cpf, address, telephone,
  }) {
    return new Promise((resolve) => {
      const newClient = {
        name,
        cpf,
        address,
        telephone,
      };

      clients.push(newClient);
      resolve(newClient);
    });
  }

  update(cpf, {
    name, address, telephone,
  }) {
    return new Promise((resolve) => {
      const updateClient = {
        name,
        address,
        telephone,
      };

      clients = clients.map((client) => (
        client.cpf === cpf ? updateClient : client
      ));

      resolve(updateClient);
    });
  }
}

module.exports = new ClientsRepository();
