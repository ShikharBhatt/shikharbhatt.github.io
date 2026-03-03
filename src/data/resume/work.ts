export interface WorkPosition {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights: string[];
}

const work: WorkPosition[] = [
  {
    name: 'Impactility',
    position: 'Senior Software Engineer - Blockchain',
    url: 'https://impactility.com',
    startDate: '2021-08-10',
    summary: '',
    highlights: [
      'Contributing to the launch of Watr Protocol, a web3 infrastructure for commodity trade, financing, and participation.',
      'Collaborated with Hitachi Digital Services to develop the corporate sustainability reporting tool "RITA".',
      'Contributed to the open-source development of the OWF VC-API codebase.',
      'Working as part of Shell plc’s Blockchain Centre of Excellence R&D team to develop enterprise-ready web3 applications and infrastructure (e.g., multisignature wallets, RPC nodes, gasless payments).',
      'Developed an open-source Ethers.js-compatible signer for Azure Key Vault using TypeScript | http://bit.ly/3RcLJz2',
      'Built a decentralized application for COP27 participants to offset their air travel carbon emissions using on-chain credits from Toucan Protocol | http://bit.ly/3Jf0qQp',
      'Deployed private RPC nodes using the OpenEthereum client, resulting in a 20% reduction in service latency.',
      'Developed and actively maintained REST microservices using Node.js, ensuring high availability and scalability.',
      'Created customized and reusable UI components with ReactJS.',
      'Set up a CI/CD pipeline using GitHub Actions to test and deploy a microservices-based application on AWS.',
      'Automated monitoring and incident response for cloud resources using AWS Lambda and EventBridge, resulting in 30% cost savings.',
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
      'Developed a .NET Core application involving REST APIs, Azure Functions, and Windows Workflow Foundation.',
      'Deployed and maintained Azure IaaS and PaaS resources using Terraform, reducing setup and maintenance time by 80%.',
      'Designed and developed an Azure Functions–based ticketing system in Remedy for applications monitored by Dynatrace.',
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
      'Developed a system to deallocate idle VMs in Azure and GCP, resulting in 65% savings on cloud billing.',
      'Designed and developed Python-based Azure Functions (HTTP, Queue, and Timer triggers) to enable reliable communication between two independent applications.',
      'Implemented a Python script to automatically resize Atos DPC VMs via Turbonomic and ServiceNow.',
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
      'Developed an interactive e-commerce web application using the Yii2 PHP framework on the LAMP stack.',
      'Deployed the application using AWS EC2, S3, and RDS.',
      'Created shell scripts to automate various administrative and deployment tasks.',
    ],
  },
];

export default work;

