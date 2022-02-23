import React from 'react';

const states = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
]

class Forms extends React.Component {
    constructor() {
      super();

      this.state = {
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        countryState: '',
        addressType: '',
        resume: '',
        role: '',
        roleDescription: '',
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
      
      };

    render() {
        return (
            <form>
                <fieldset>
                    <div>
                    <p>Dados Pessoais</p>
                    </div>
                    <label  htmlFor="name">
                        Nome: 
                        <input
                            type="text" 
                            maxlength="40" 
                            id="name" 
                            name="name" 
                            required
                        />
                    </label>

                    <label  htmlFor="email">
                        Email: 
                        <input 
                            type="email" 
                            maxlength="50" 
                            id="email" 
                            name="email"
                            required
                        />
                    </label>

                    <label  htmlFor="cpf">
                        CPF: 
                        <input 
                            type="text" 
                            maxlength="11" 
                            id="cpf" 
                            name="cpf"
                            required
                        />
                    </label>

                    <label  htmlFor="adress">
                        Endereço: 
                        <input 
                            type="text" 
                            maxlength="200" 
                            id="adress" 
                            name="adress"
                            required
                        />
                    </label>

                    <label  htmlFor="city">
                        Cidade: 
                        <input 
                            type="text" 
                            maxlength="28" 
                            id="city" 
                            name="city"
                            required
                        />
                    </label>

                    <label  htmlFor="countryState">
                        Estado: 
                        <select
                            name="countryState"
                            required
                            defaultValue=""
                        >
                        <option value="">Selecione</option>
                            {
                                states.map((value, key) => (
                                <option key={ key }>{ value }</option>
                                ))
                            }
                        </select>
                    </label>

                    <div>
                        <label  htmlFor="house">
                            Tipo de Moradia: 
                            <input
                                type="radio" 
                                maxlength="28" 
                                id="house" 
                                name="addressType"
                                required
                            /> Casa:
                        </label>

                        <label>
                            <input
                                type="radio" 
                                maxlength="28" 
                                id="house" 
                                name="addressType" 
                                required
                            /> Apartamento:
                        </label>
                    </div>   
                </fieldset>

                <fieldset>
                    Dados do ultimo emprego: 
                <label>
                        Resumo do currículo: 
                        <textarea 
                            type="textarea" 
                            maxlength="1000" 
                            id="resumo" 
                            name="resume"
                            required
                        />
                    </label>

                    <label>
                        Cargo:
                        <textarea 
                            type="textarea" 
                            maxlength="40" 
                            id="cargo" 
                            name="role"
                            required
                        />
                    </label>

                    <label>
                        Descrição do cargo:
                        <textarea 
                            type="text" 
                            maxlength="500" 
                            id="cargo" 
                            name="roleDescription"
                            required
                        />
                    </label>
                </fieldset>

                <button>Limpar Formulário</button>
            </form>
        );
    }
}

export default Forms;
