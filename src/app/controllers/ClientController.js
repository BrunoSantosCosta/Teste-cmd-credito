const ClientsRepository = require('../repositories/ClientsRepository');

class ClientController {
  async index(request, response) {
    const clients = await ClientsRepository.findAll();
    response.json(clients);
  }

  async show(request, response) {
    const { cpf } = request.params;
    const client = await ClientsRepository.findByCpf(cpf);

    if (!client) {
      return response.status(404).json({ error: 'User not found' });
    }
    response.json(client);
  }

  store() {

  }

  update() {

  }

  async delete(request, response) {
    const { cpf } = request.params;

    const client = await ClientsRepository.findByCpf(cpf);

    if (!client) {
      return response.status(404).json({ error: 'User not found' });
    }
    await ClientsRepository.delete(cpf);
    response.sendStatus(204);
  }
}

module.exports = new ClientController();
