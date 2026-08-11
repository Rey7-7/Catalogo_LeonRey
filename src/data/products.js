import Hidrolavadora from '../assets/products/Hidrolavadora.jpeg'
import Calcetas from '../assets/products/Calcetas.jpeg'
import Carro from '../assets/products/Carro.png'
import Esclava from '../assets/products/Esclava.jpeg'
import Rasuradora from '../assets/products/Rasuradora.jpeg'
import Repetidor from '../assets/products/Repetidor.jpeg'
import Soporte from '../assets/products/Soporte.jpeg'
import TvBox from '../assets/products/TvBox.jpeg'
import Ventilador from '../assets/products/Ventilador.png'

export const products = [
  {
    id: 1,
    name: 'HIDROLAVADORA PORTÁTIL',
    description: 'Dos baterías incluidas, exelente para lavar tu motocicleta o coche.',
    price: 420,
    inStock: true,
    image: Hidrolavadora,
  },
  {
    id: 2,
    name: 'REPETIDOR WIFI',
    description: 'Disponible para entrega inmediata, muy fácil de configurar.',
    price: 300,
    inStock: true,
    image: Repetidor,
  },
  {
    id: 3,
    name: 'RASURADORA RECARGABLE',
    description: 'Excelente para barba y bigote.',
    price: 300,
    inStock: true,
    image: Rasuradora,
  },
  {
    id: 4,
    name: 'ESCLAVA CON DISEÑO DE CADENA DE MOTO',
    description: 'Acero inoxidable, excelente regalo para papá.',
    price: 150,
    inStock: true,
    image: Esclava,
  },
  {
    id: 5,
    name: 'PAQUETE CON 24 PARES DE CALCETINES',
    description: '95% Algodon de excelente calidad.',
    price: 170,
    inStock: true,
    image: Calcetas,
  },
  {
    id: 6,
    name: 'SOPORTE MOVIBLE REFORZADO, PARA PANTALLA DE 14 A 55 PULGADAS',
    description: 'Incluye taquetes y tornillera, muy resistente.',
    price: 300,
    inStock: true,
    image: Soporte,
  },
  {
    id: 7,
    name: 'VENTILADOR CON DIFUSOR DE AGUA',
    description: 'Recargable, doble ventilador y tres velocidades con luz led.',
    price: 230,
    inStock: true,
    image: Ventilador,
  },
  {
    id: 8,
    name: 'TV-BOX: CONVIERTE TU TV VIEJA EN UNA SMARTV',
    description: 'Deja de pagar plataformas o servicios de TV con la aplicación de streaming incluida.',
    price: 800,
    inStock: true,
    featured: true,
    image: TvBox,
  },
  {
    id: 9,
    name: 'BOCINA DE CARRO BLUETOOTH',
    description: 'Disponible en azul y amarillo, excelente sonido.',
    price: 280,
    inStock: true,
    image: Carro,
  },
]

