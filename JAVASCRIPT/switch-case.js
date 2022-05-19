let profile = 'gerent'

switch (profile) {
    case 'comum':
        console.log('Usuario comum');
        break;

    case 'gerente':
        console.log('usuario gerente');
        break;

    case 'diretor':
        console.log('usuario diretor');
        break;

    default:
        console.log('usuario não reconhecido');
}