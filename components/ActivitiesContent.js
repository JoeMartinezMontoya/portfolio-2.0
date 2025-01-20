import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaPhp,
  FaSass,
  FaReact,
  FaBootstrap,
  FaDocker,
  FaGitlab,
  FaLaravel,
  FaJenkins,
  FaAws,
  FaAngular,
  FaPython,
  FaNodeJs,
} from 'react-icons/fa';
import {
  RiNextjsFill,
  RiPlantFill,
  RiTailwindCssFill,
  RiVuejsFill,
  RiWindowsFill,
} from 'react-icons/ri';
import {
  SiApachemaven,
  SiCakephp,
  SiCapacitor,
  SiCloudinary,
  SiComposer,
  SiElasticsearch,
  SiGraylog,
  SiJquery,
  SiKubernetes,
  SiMariadb,
  SiMeilisearch,
  SiMongodb,
  SiNeo4J,
  SiPhpstorm,
  SiPostgresql,
  SiPostman,
  SiQuasar,
  SiRabbitmq,
  SiRedis,
  SiRedmine,
  SiScrutinizerci,
  SiSelenium,
  SiSentry,
  SiSlack,
  SiSocketdotio,
  SiSonarqube,
  SiStimulus,
  SiSublimetext,
  SiSymfony,
  SiTypescript,
  SiYarn,
} from 'react-icons/si';
import { GiAtom, GiLongLeggedSpider, GiSilex } from 'react-icons/gi';
import {
  DiDebian,
  DiDrupal,
  DiFirebase,
  DiGoogleCloudPlatform,
  DiNpm,
  DiUbuntu,
} from 'react-icons/di';
import { VscAzure, VscVscode } from 'react-icons/vsc';
import { FaGitAlt } from 'react-icons/fa6';

import { motion } from 'framer-motion';

export default function ActivitiesContent({ category }) {
  const content = {
    os: [
      {
        name: 'Windows',
        icon: <RiWindowsFill />,
        level: 'Maitrise',
      },
      {
        name: 'Debian',
        icon: <DiDebian />,
        level: 'Familier',
      },
      {
        name: 'Ubuntu',
        icon: <DiUbuntu />,
        level: 'Familier',
      },
    ],
    frontend: [
      {
        name: 'HTML5',
        icon: <FaHtml5 />,
        level: 'Maitrise',
      },
      {
        name: 'CSS3',
        icon: <FaCss3Alt />,
        level: 'Maitrise',
      },
      {
        name: 'JavaScript',
        icon: <FaJs />,
        level: 'Maitrise',
      },
      {
        name: 'Bootstrap',
        icon: <FaBootstrap />,
        level: 'Familier',
      },
      {
        name: 'Sass',
        icon: <FaSass />,
        level: 'Familier',
      },
      {
        name: 'React',
        icon: <FaReact />,
        level: 'Familier',
      },
      {
        name: 'Next.js',
        icon: <RiNextjsFill />,
        level: 'Familier',
      },
      {
        name: 'Tailwind CSS',
        icon: <RiTailwindCssFill />,
        level: 'Familier',
      },
      {
        name: 'jQuery',
        icon: <SiJquery />,
        level: 'Familier',
      },
      {
        name: 'Npm',
        icon: <DiNpm />,
        level: 'Familier',
      },
      {
        name: 'Yarn',
        icon: <SiYarn />,
        level: 'Familier',
      },
    ],
    backend: [
      {
        name: 'Symfony',
        icon: <SiSymfony />,
        level: 'Maitrise',
      },
      {
        name: 'Twig',
        icon: <RiPlantFill />,
        level: 'Maitrise',
      },
      {
        name: 'PHP',
        icon: <FaPhp />,
        level: 'Maitrise',
      },
      {
        name: 'Composer',
        icon: <SiComposer />,
        level: 'Maitrise',
      },
      {
        name: 'MariaDB',
        icon: <SiMariadb />,
        level: 'Maitrise',
      },
      {
        name: 'Python',
        icon: <FaPython />,
        level: 'Familier',
      },
      {
        name: 'Silex',
        icon: <GiSilex />,
        level: 'Familier',
      },
      {
        name: 'APIPlatform',
        icon: <GiLongLeggedSpider />,
        level: 'Familier',
      },
    ],
    outils: [
      {
        name: 'VS Code',
        icon: <VscVscode />,
        level: 'Maitrise',
      },
      {
        name: 'PHPStorm',
        icon: <SiPhpstorm />,
        level: 'Maitrise',
      },
      {
        name: 'Atom',
        icon: <GiAtom />,
        level: 'Maitrise',
      },
      {
        name: 'SublimeText',
        icon: <SiSublimetext />,
        level: 'Maitrise',
      },
      {
        name: 'Git',
        icon: <FaGitAlt />,
        level: 'Maitrise',
      },
      {
        name: 'GitHub',
        icon: <FaGithub />,
        level: 'Maitrise',
      },
      {
        name: 'GitLab',
        icon: <FaGitlab />,
        level: 'Maitrise',
      },
      {
        name: 'Slack',
        icon: <SiSlack />,
        level: 'Maitrise',
      },
      {
        name: 'Postman',
        icon: <SiPostman />,
        level: 'Maitrise',
      },
      {
        name: 'GitHub Actions',
        icon: <FaGithub />,
        level: 'Familier',
      },
      {
        name: 'Docker',
        icon: <FaDocker />,
        level: 'Familier',
      },
      {
        name: 'Docker Desktop',
        icon: <FaDocker />,
        level: 'Familier',
      },
    ],
    'à apprendre': [
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql />,
        level: 'Familier',
      },
      {
        name: 'Vue.js',
        icon: <RiVuejsFill />,
        level: 'Familier',
      },
      {
        name: 'Laravel',
        icon: <FaLaravel />,
        level: 'Familier',
      },
      {
        name: 'CakePHP',
        icon: <SiCakephp />,
        level: 'Familier',
      },
      {
        name: 'Node.js',
        icon: <FaNodeJs />,
        level: 'Curieux',
      },
      {
        name: 'Scrutinizer',
        icon: <SiScrutinizerci />,
        level: 'Curieux',
      },
      {
        name: 'Selenium',
        icon: <SiSelenium />,
        level: 'Curieux',
      },
      {
        name: 'Angular',
        icon: <FaAngular />,
        level: 'Curieux',
      },
      {
        name: 'Capacitor',
        icon: <SiCapacitor />,
        level: 'Curieux',
      },
      {
        name: 'Redmine',
        icon: <SiRedmine />,
        level: 'Curieux',
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript />,
        level: 'Curieux',
      },
      {
        name: 'Quasar',
        icon: <SiQuasar />,
        level: 'Curieux',
      },
      {
        name: 'Stimulus',
        icon: <SiStimulus />,
        level: 'Curieux',
      },
      {
        name: 'AWS',
        icon: <FaAws />,
        level: 'Curieux',
      },
      {
        name: 'Drupal',
        icon: <DiDrupal />,
        level: 'Curieux',
      },
      {
        name: 'GCP',
        icon: <DiGoogleCloudPlatform />,
        level: 'Curieux',
      },
      {
        name: 'Firebase',
        icon: <DiFirebase />,
        level: 'Curieux',
      },
      {
        name: 'Cloudinary',
        icon: <SiCloudinary />,
        level: 'Curieux',
      },
      {
        name: 'Azure',
        icon: <VscAzure />,
        level: 'Curieux',
      },
      {
        name: 'Kubernetes',
        icon: <SiKubernetes />,
        level: 'Curieux',
      },
      {
        name: 'GitLab CI/CD',
        icon: <FaGithub />,
        level: 'Curieux',
      },
      {
        name: 'Jenkins',
        icon: <FaJenkins />,
        level: 'Curieux',
      },
      {
        name: 'ElasticSearch',
        icon: <SiElasticsearch />,
        level: 'Curieux',
      },
      {
        name: 'RabbitMQ',
        icon: <SiRabbitmq />,
        level: 'Curieux',
      },
      {
        name: 'MeiliSearch',
        icon: <SiMeilisearch />,
        level: 'Curieux',
      },
      {
        name: 'Sentry',
        icon: <SiSentry />,
        level: 'Curieux',
      },
      {
        name: 'Graylog',
        icon: <SiGraylog />,
        level: 'Curieux',
      },
      {
        name: 'SonarQube',
        icon: <SiSonarqube />,
        level: 'Curieux',
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb />,
        level: 'Curieux',
      },
      {
        name: 'Redis',
        icon: <SiRedis />,
        level: 'Curieux',
      },
      {
        name: 'Neo4J',
        icon: <SiNeo4J />,
        level: 'Curieux',
      },
      {
        name: 'Maven',
        icon: <SiApachemaven />,
        level: 'Curieux',
      },
      {
        name: 'Socket.io',
        icon: <SiSocketdotio />,
        level: 'Curieux',
      },
    ],
  };

  const levelColors = {
    Curieux: 'bg-orange-600',
    Familier: 'bg-yellow-600',
    Maitrise: 'bg-green-600',
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
      {content[category].map((item, index) => (
        <motion.div
          key={index}
          className='p-4 bg-gray-800 hover:bg-blue-800 rounded-lg shadow-md hover:shadow-xl transition-shadow'>
          <div className='flex items-center space-x-4'>
            <div className='text-2xl text-blue-400'>{item.icon}</div>
            <div className='flex justify-between w-full'>
              <h3 className='text-white text-xl md:text-base font-semibold'>
                {item.name}
              </h3>
              <div
                className={`inline-block py-1 px-3 text-white text-sm rounded ${
                  levelColors[item.level]
                }`}>
                {item.level}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
