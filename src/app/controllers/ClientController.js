const ClientsRepository = require('../repositories/ClientsRepository');

class ClientController {
  async index(request, response) {
    const clients = await ClientsRepository.findAll();
    response.json(clients);
  }

  async show(request, response) {
    const { cpf } = request.params;
    const client = await ClientsRepository.findByDel(cpf);

    if (!client) {
      return response.status(404).json({ error: 'User not found' });
    }
    response.json(client);
  }

  async store(request, response) {
    const {
      name, cpf, address, telephone,
    } = request.body;

    const clientExists = await ClientsRepository.findByCpf(cpf);

    if (clientExists) {
      return response.status(400).json({ error: 'This cpf is already been taken' });
    }

    const client = await ClientsRepository.create({
      name, cpf, address, telephone,
    });

    response.json(client);
  }

  async update(request, response) {
    const { cpf } = request.params;
    const {
      name, address, telephone,
    } = request.body;

    const clientExists = await ClientsRepository.findByCpf(cpf);
    if (!clientExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const clientByCpf = await ClientsRepository.findByCpf(cpf);
    if (clientByCpf && clientByCpf.cpf === !cpf) {
      return response.status(400).json({ error: 'This cpf is already already in use' });
    }

    const client = await ClientsRepository.update(cpf, {
      name, cpf, address, telephone,
    });

    response.json(client);
  }

  async delete(request, response) {
    const { cpf } = request.params;

    const client = await ClientsRepository.findByDel(cpf);

    if (!client) {
      return response.status(404).json({ error: 'User not found' });
    }
    await ClientsRepository.delete(cpf);
    response.sendStatus(204);
  }
}

module.exports = new ClientController();
