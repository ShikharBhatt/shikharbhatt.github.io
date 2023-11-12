/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Impactility',
    position: 'Software Engineer - Blockchain',
    url: 'https://impactility.com',
    startDate: '2021-08-10',
    summary: '',
    highlights: [
      'Working as part of Shell Plc’s Blockchain Centre of Excellence R&D team to develop enterprise ready web3 applications and infrastructure | Multisignature wallet, RPC nodes, Gasless payments, etc.',
      'Developed an open source Ethers.js compatible signer for Azure Key Vault using TypeScript | http://bit.ly/3RcLJz2',
      'Developed a decentralized app for the COP27 conference participants to offset their air travel’s carbon emissions using on-chain credits from Toucan Protocol | http://bit.ly/3Jf0qQp',
      'Deployed private RPC nodes using OpenEthereum Client, resulting in a 20% reduction in service latency',
      'Developed and actively maintained REST microservices utilizing NodeJS, ensuring high availability and scalability',
      'Developed customized and re-usable UI components with ReactJS.',
      'Setup CI/CD pipeline using Github Actions to test and deploy a micro-services architecture based application on AWS',
      'Automated monitoring and downtime for resources using AWS Lambda & EventBridge resulting in 30% cost savings',
    ],
  },
  {
    name: 'Schlumberger',
    position: 'Application Engineer',
    url: 'https://www.slb.com/',
    startDate: '2020-08-01',
    endDate: '2021-08-01',
    summary: '',
    highlights: [
      'Developed a .NET Core Application involving creation of REST APIs, Azure Functions & MS Workflow Foundation',
      'Deploy & maintain Azure IaaS, PaaS resources via Terraform, reducing setup and maintenance time by 80%',
      'Designed and developed Azure Function based ticketing system in Remedy for applications monitored by Dynatrace',
    ],
  },
  {
    name: 'Schlumberger',
    position: 'Associate Application Engineer',
    url: 'https://www.slb.com/',
    startDate: '2019-07-25',
    endDate: '2020-08-01',
    summary: '',
    highlights: [
      'Developed a system to deallocate idle VMs in cloud(Azure/GCP) resulting in 65% cloud billing savings',
      'Designed and developed Python based Azure Functions(HTTP, Queue, Timer triggers) for effective and efficient communication between two independent applications',
      'Developed a python script for automatic resizing of Atos DPC VMs via Turbonomic & ServiceNow',
    ],
  },
  {
    name: 'Golden Creeper Pictures',
    position: 'Web Development Intern',
    url: 'https://www.goldencreeperpictures.com/',
    startDate: '2017-11-01',
    endDate: '2018-01-31',
    summary: '',
    highlights: [
      'Developed an interactive web application for an e-commerce store based on the Yii2 PHP framework and LAMP stack',
      'Deployed the application using AWS EC2, S3 and RDS',
      'Developed shell scripts to automate various administrative tasks',
    ],
  },
];

export default work;
