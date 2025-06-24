import { Player } from '@/entities/Player';
import { MovieAbout } from '@/widgets/movieAbout';
import { getMovie } from '@/entities/Movie/api/getMovie';

type Props = {
  params: {
    id: string;
  };
};

export default async function Films({ params }: Props) {
  const { id } = params;

  const data = await getMovie(id);
  //   const data = {
  //     id: 4635111,
  //     externalId: { tmdb: 244795, kpHD: '355fa1f85dd44ba59a6646669d4bf45e' },
  //     name: 'Внутри убийцы',
  //     alternativeName: null,
  //     names: [
  //       {
  //         name: 'Внутри убийцы',
  //         language: 'RU',
  //         type: 'Russian title on kinopoisk',
  //       },
  //     ],
  //     type: 'tv-series',
  //     typeNumber: 2,
  //     year: 2024,
  //     description: `Профайлер Зоя Волгина — лучшая в своем деле: сцены преступлений буквально оживают у нее перед глазами. Именно Зою и специального сотрудника Следственного комитета Тимофея Волоха привлекают к новому
  // расследованию: в Петербурге неизвестный душитель бальзамирует тела своих жертв, превращая их в статуи. Его «почерк» Зое знаком — много лет назад она уже сталкивалась с очень похожим человеком.`,
  //     shortDescription: `Профайлер вступает в дуэль с маньяком. По мотивам мирового бестселлера Майка Омера `,
  //     slogan: null,
  //     status: 'completed',
  //     rating: {
  //       kp: 7.391,
  //       imdb: 0,
  //       filmCritics: 0,
  //       russianFilmCritics: 0,
  //       await: null,
  //     },
  //     votes: {
  //       kp: 610901,
  //       imdb: 0,
  //       filmCritics: 0,
  //       russianFilmCritics: 1,
  //       await: 0,
  //     },
  //     movieLength: null,
  //     totalSeriesLength: null,
  //     seriesLength: 50,
  //     ratingMpaa: null,
  //     ageRating: 18,
  //     poster: {
  //       url: 'https://image.openmoviedb.com/kinopoisk-images/4483445/178bf968-4255-4ec6-b693-2f240539265d/600x900',
  //       previewUrl:
  //         'https://image.openmoviedb.com/kinopoisk-images/4483445/178bf968-4255-4ec6-b693-2f240539265d/300x450',
  //     },
  //     backdrop: {
  //       url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018d82d0ff28412f7e35982c993f30/1344x756',
  //       previewUrl:
  //         'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018d82d0ff28412f7e35982c993f30/678x380',
  //     },
  //     genres: [{ name: 'детектив' }, { name: 'триллер' }],
  //     countries: [{ name: 'Россия' }],
  //     persons: [
  //       {
  //         id: 4173230,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4173230.jpg',
  //         name: 'Анастасия Евграфова',
  //         enName: null,
  //         description: 'Зоя Волгина',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1775081,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1775081.jpg',
  //         name: 'Тихон Жизневский',
  //         enName: null,
  //         description: 'Тимофей Волох',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1627511,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1627511.jpg',
  //         name: 'Яна Сексте',
  //         enName: null,
  //         description: 'Шеф Самара',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 171589,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_171589.jpg',
  //         name: 'Сергей Шакуров',
  //         enName: null,
  //         description: 'Дед Никола',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 4498242,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4498242.jpg',
  //         name: 'Дарья Коныжева',
  //         enName: null,
  //         description: 'Александра',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 3647298,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3647298.jpg',
  //         name: 'Сергей Гилев',
  //         enName: null,
  //         description: 'Кирилл Львов',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 6313586,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6313586.jpg',
  //         name: 'Вероника Мохирева',
  //         enName: null,
  //         description: 'Лили',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 5821258,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5821258.jpg',
  //         name: 'Анастасия Красовская',
  //         enName: null,
  //         description: 'Ника',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 3412634,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3412634.jpg',
  //         name: 'Диана Енакаева',
  //         enName: null,
  //         description: 'Зоя в юности',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 84751,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_84751.jpg',
  //         name: 'Александр Резалин',
  //         enName: null,
  //         description: 'Доктор Сафразьян',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 5701842,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5701842.jpg',
  //         name: 'Мария Маслова',
  //         enName: null,
  //         description: null,
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 910838,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_910838.jpg',
  //         name: 'Олег Алмазов',
  //         enName: null,
  //         description: null,
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1304125,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1304125.jpg',
  //         name: 'Мария Рыщенкова',
  //         enName: null,
  //         description: null,
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 373147,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_373147.jpg',
  //         name: 'Карэн Бадалов',
  //         enName: null,
  //         description: 'Абрамсон',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 6878614,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6878614.jpg',
  //         name: 'Марфа Просвирникова',
  //         enName: null,
  //         description: 'Лиза',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 3731082,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3731082.jpg',
  //         name: 'Сергей Беляев',
  //         enName: null,
  //         description: 'Осип',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 2446698,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2446698.jpg',
  //         name: 'Вера Кинчева',
  //         enName: null,
  //         description: 'Диана',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1670940,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1670940.jpg',
  //         name: 'Дмитрий Смирнов',
  //         enName: null,
  //         description: 'Руслан Головин в молодости',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 6658872,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6658872.jpg',
  //         name: 'Владимир Комаров',
  //         enName: null,
  //         description: null,
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 4928406,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4928406.jpg',
  //         name: 'Денис Сладков',
  //         enName: null,
  //         description: 'священник',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 7088801,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7088801.jpg',
  //         name: 'Ирина Лабаторина',
  //         enName: null,
  //         description: 'Елизавета Бове',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 7128826,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7128826.jpg',
  //         name: 'Екатерина Авдеева ',
  //         enName: null,
  //         description: 'жертва маньяка',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 7141065,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7141065.jpg',
  //         name: 'Анна Титова',
  //         enName: null,
  //         description: 'Алиса',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 7150114,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7150114.jpg',
  //         name: 'Наталия Рахманова',
  //         enName: null,
  //         description: 'девушка легкого поведения',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 7090587,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7090587.jpg',
  //         name: 'Александрина Олексюк',
  //         enName: null,
  //         description: 'Кира',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 5586166,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5586166.jpg',
  //         name: 'Митя Фёдоров',
  //         enName: null,
  //         description: 'Андрей Скорик',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 571651,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_571651.jpg',
  //         name: 'Фёдор Лавров',
  //         enName: null,
  //         description: 'Марат Апраксин',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1175949,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1175949.jpg',
  //         name: 'Геннадий Смирнов',
  //         enName: null,
  //         description: 'редактор Гарика',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1053232,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1053232.jpg',
  //         name: 'Алексей Мясников',
  //         enName: null,
  //         description: 'Михаил',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 6413997,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6413997.jpg',
  //         name: 'Мария Дмитриева',
  //         enName: null,
  //         description: 'Кристина',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 281227,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_281227.jpg',
  //         name: 'Сергей Чурбаков',
  //         enName: null,
  //         description: 'Урушадзе',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1811443,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1811443.jpg',
  //         name: 'Елена Муравьева',
  //         enName: null,
  //         description: 'Вера Пустота',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1614862,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1614862.jpg',
  //         name: 'Владислав Абашин',
  //         enName: null,
  //         description: 'Руслан Головин',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 6917924,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6917924.jpg',
  //         name: 'Марта Евстигнеева',
  //         enName: null,
  //         description: 'Александра в детстве',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1605152,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1605152.jpg',
  //         name: 'Борис Хвошнянский',
  //         enName: null,
  //         description: 'Гарик Малинин',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 6947725,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6947725.jpg',
  //         name: 'Алиса Воробьева',
  //         enName: null,
  //         description: 'хипстер',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 4715299,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4715299.jpg',
  //         name: 'Евгения Вайс',
  //         enName: null,
  //         description: 'следователь',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1719711,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1719711.jpg',
  //         name: 'Ёла Санько',
  //         enName: null,
  //         description: 'соседка Веры Пустоты',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 2364812,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2364812.jpg',
  //         name: 'Сергей Ефремов',
  //         enName: null,
  //         description: 'Коровин',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 6220373,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6220373.jpg',
  //         name: 'Полина Тимакова ',
  //         enName: null,
  //         description: 'дочь Веры Пустоты',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 5040154,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5040154.jpg',
  //         name: 'Дмитрий Вяткин',
  //         enName: null,
  //         description: 'Кирилл в детстве',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 4410117,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4410117.jpg',
  //         name: 'Иса Новиков',
  //         enName: null,
  //         description: 'Осип в детстве',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1080301,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1080301.jpg',
  //         name: 'Игорь Ромащенко',
  //         enName: null,
  //         description: 'майор Вельяминов',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 6304466,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6304466.jpg',
  //         name: 'Анастасия Пьянова',
  //         enName: null,
  //         description: 'Лора',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 307640,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_307640.jpg',
  //         name: 'Евгений Бакалов',
  //         enName: null,
  //         description: 'Натан Коротков',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 290171,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_290171.jpg',
  //         name: 'Екатерина Васильева',
  //         enName: null,
  //         description: 'Фирсова',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 637275,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_637275.jpg',
  //         name: 'Егор Бакулин',
  //         enName: null,
  //         description: 'Денис',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1820604,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1820604.jpg',
  //         name: 'Алексей Овсянников',
  //         enName: null,
  //         description: 'Слава',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 5329821,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5329821.jpg',
  //         name: 'Максим Иванов',
  //         enName: null,
  //         description: 'сын Лоры',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 1820302,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1820302.jpg',
  //         name: 'Андрей Полищук',
  //         enName: null,
  //         description: 'танатолог',
  //         profession: 'актеры',
  //         enProfession: 'actor',
  //       },
  //       {
  //         id: 3691160,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3691160.jpg',
  //         name: 'Райан Оттер',
  //         enName: null,
  //         description: null,
  //         profession: 'композиторы',
  //         enProfession: 'composer',
  //       },
  //       {
  //         id: 2003424,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2003424.jpg',
  //         name: 'Эдуард Галкин',
  //         enName: null,
  //         description: null,
  //         profession: 'художники',
  //         enProfession: 'designer',
  //       },
  //       {
  //         id: 2421043,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2421043.jpg',
  //         name: 'Елена Дронова',
  //         enName: null,
  //         description: null,
  //         profession: 'художники',
  //         enProfession: 'designer',
  //       },
  //       {
  //         id: 1078306,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1078306.jpg',
  //         name: 'Владимир Мирзоев',
  //         enName: null,
  //         description: null,
  //         profession: 'режиссеры',
  //         enProfession: 'director',
  //       },
  //       {
  //         id: 2703650,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2703650.jpg',
  //         name: 'Александр Амиров',
  //         enName: null,
  //         description: null,
  //         profession: 'монтажеры',
  //         enProfession: 'editor',
  //       },
  //       {
  //         id: 3083913,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3083913.jpg',
  //         name: 'Василий Григолюнас',
  //         enName: null,
  //         description: null,
  //         profession: 'операторы',
  //         enProfession: 'operator',
  //       },
  //       {
  //         id: 3695595,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3695595.jpg',
  //         name: 'Владимир Маслов',
  //         enName: null,
  //         description: null,
  //         profession: 'продюсеры',
  //         enProfession: 'producer',
  //       },
  //       {
  //         id: 3060547,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3060547.jpg',
  //         name: 'Михаил Китаев',
  //         enName: null,
  //         description: null,
  //         profession: 'продюсеры',
  //         enProfession: 'producer',
  //       },
  //       {
  //         id: 5126937,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5126937.jpg',
  //         name: 'Ольга Филипук',
  //         enName: null,
  //         description: null,
  //         profession: 'продюсеры',
  //         enProfession: 'producer',
  //       },
  //       {
  //         id: 10134948,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10134948.jpg',
  //         name: 'Ася Гладковская',
  //         enName: null,
  //         description: null,
  //         profession: 'продюсеры',
  //         enProfession: 'producer',
  //       },
  //       {
  //         id: 1078306,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1078306.jpg',
  //         name: 'Владимир Мирзоев',
  //         enName: null,
  //         description: null,
  //         profession: 'сценаристы',
  //         enProfession: 'writer',
  //       },
  //       {
  //         id: 6975427,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6975427.jpg',
  //         name: 'Анастасия Мирзоева',
  //         enName: null,
  //         description: null,
  //         profession: 'сценаристы',
  //         enProfession: 'writer',
  //       },
  //       {
  //         id: 6559965,
  //         photo:
  //           'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6559965.jpg',
  //         name: 'Майк Омер',
  //         enName: 'Mike Omer',
  //         description: null,
  //         profession: 'сценаристы',
  //         enProfession: 'writer',
  //       },
  //     ],
  //     premiere: {
  //       country: null,
  //       world: null,
  //       russia: null,
  //       cinema: null,
  //       bluray: null,
  //       dvd: null,
  //       digital: '2024-02-22T00:00:00.000Z',
  //     },
  //     releaseYears: [{ start: 2024, end: 2024 }],
  //     top10: null,
  //     top250: null,
  //     isSeries: true,
  //     ticketsOnSale: false,
  //     lists: ['audiodescription', 'popular-series', 'hd'],
  //     networks: { items: [[Object]] },
  //     createdAt: '2024-04-13T01:37:01.778Z',
  //     updatedAt: '2025-06-22T14:54:32.725Z',
  //     seasonsInfo: [{ number: 1, episodesCount: 5 }],
  //     isTmdbChecked: true,
  //     studioParsed: true,
  //     keywordsParsed: false,
  //     watchability: { items: [[Object], [Object]] },
  //     userRatingsParsed: true,
  //     similarMovies: [
  //       {
  //         id: 5453070,
  //         name: 'Внутри убийцы: Экстра',
  //         alternativeName: null,
  //         type: 'movie',
  //         poster: [Object],
  //         rating: [Object],
  //         year: 2024,
  //       },
  //       {
  //         id: 6618219,
  //         name: 'Киноужин',
  //         alternativeName: null,
  //         type: 'tv-series',
  //         poster: [Object],
  //         rating: [Object],
  //         year: 2024,
  //       },
  //       {
  //         id: 6634209,
  //         name: 'Эксперт смотрит',
  //         alternativeName: null,
  //         type: 'tv-series',
  //         poster: [Object],
  //         rating: [Object],
  //         year: 2024,
  //       },
  //     ],
  //   };
  return (
    <article className='rounded-lg border border-color2'>
      <div className='p-4'>
        <MovieAbout movie={data} />
        <div className='mt-6'>
          <div className='aspect-video bg-foreground rounded-lg overflow-hidden'>
            <Player id={id} />
          </div>
        </div>
      </div>
    </article>
  );
}
