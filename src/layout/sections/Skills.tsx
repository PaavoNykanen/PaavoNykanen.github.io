import { Flex, Tooltip, Typography } from 'antd';

type ConfidenceLevel = 'Go-to' | 'Shipped it' | 'Know it' | 'Learning';

type SkillItem = {
  name: string
  confidence: ConfidenceLevel
  icon?: string
  tooltip?: string
};

type SkillCategory = {
  title: string
  skills: SkillItem[]
};

const tooltipBySkill: Record<string, string> = {
  'React': 'Lots of experience building React web applications across multiple component libraries.',
  'TypeScript': 'Used heavily in both front-end and back-end development for safer code.',
  'JavaScript': 'Used in smaller projects and as the base language behind TypeScript work.',
  'HTML/CSS': 'Strong web fundamentals from early projects and production UI work.',
  'Tailwind': 'Used for rapid utility-first styling in modern React applications and UI refinement.',
  'Vite': 'Used as the main build tool and dev server for fast iteration and build performance.',
  'AWS Kiro': 'Used a lot in spec and vibe mode for fixes, debugging, and feature development.',
  'Claude': 'Used for coding support, reviews, architecture discussions, and design decisions.',
  'AWS': 'Used for serverless apps, APIs, web apps, and cloud operations in production projects.',
  'Azure': 'Used for integrations and operational services including Azure Functions and monitoring.',
  'Docker': 'Used for packaging and running services in development and project environments.',
  'Kubernetes': 'Used in school projects for scalable container-based service deployments.',
  'DynamoDB': 'Used extensively for NoSQL data modeling, indexing, and partitioning.',
  'AWS S3': 'Used for storing files, media assets, and structured data payloads.',
  'C#/.NET': 'Used for server-side services, APIs, and integrations at work and in projects.',
  'Java': 'Used in school projects and some API development work.',
  'Python': 'Used for scripts, migration/data tasks, and coursework projects.',
  'GraphQL': 'Used for internal APIs alongside REST-based service integrations.',
  'Git/GitHub': 'Daily version control workflow, collaboration, branching, and pull requests.',
  'Azure DevOps': 'Used for project planning, work item management, and agile delivery workflows.',
  'Arduino': 'Used in IoT coursework projects with sensors and cloud-connected data collection.',
};

const confidenceTagStyles: Record<ConfidenceLevel, { background: string, color: string }> = {
  'Go-to': { background: '#D5E8BD', color: '#1E4207' },
  'Shipped it': { background: '#CCE3F8', color: '#0A3A6A' },
  'Know it': { background: '#F1D7B8', color: '#6A3B07' },
  'Learning': { background: '#F4D0DF', color: '#6D1F45' },
};

const legendDotColors: Record<ConfidenceLevel, string> = {
  'Go-to': '#639922',
  'Shipped it': '#185FA5',
  'Know it': '#C97A1E',
  'Learning': '#C24B86',
};

const iconBySkill: Record<string, string> = {
  'React': '/assets/skills/react.svg',
  'TypeScript': '/assets/skills/typescript.svg',
  'JavaScript': '/assets/skills/javascript.svg',
  'HTML/CSS': '/assets/skills/html-5.svg',
  'Tailwind': '/assets/skills/tailwind.svg',
  'Vite': '/assets/skills/vite.svg',
  'React Native': '/assets/skills/react-native.svg',
  'Expo': '/assets/skills/expo.svg',
  'AWS': '/assets/skills/aws.svg',
  'Azure': '/assets/skills/azure.svg',
  'AWS CDK': '/assets/skills/cdk.svg',
  'Docker': '/assets/skills/docker.svg',
  'GitHub Actions': '/assets/skills/github-actions.svg',
  'AWS Codepipeline': '/assets/skills/aws-codepipeline.svg',
  'Kubernetes': '/assets/skills/kubernetes.svg',
  'DynamoDB': '/assets/skills/dynamo.svg',
  'AWS S3': '/assets/skills/s3.svg',
  'PostgreSQL': '/assets/skills/postgresql.svg',
  'MySQL': '/assets/skills/mysql.svg',
  'MongoDB': '/assets/skills/mongodb.svg',
  'Node.js': '/assets/skills/nodejs.svg',
  'C#/.NET': '/assets/skills/csharp.svg',
  'GraphQL': '/assets/skills/graphql.svg',
  'REST': '/assets/skills/rest.svg',
  'Java': '/assets/skills/java.svg',
  'Python': '/assets/skills/python.svg',
  'Claude': '/assets/skills/claude.svg',
  'GitHub Copilot': '/assets/skills/copilot.svg',
  'Cursor': '/assets/skills/cursor.svg',
  'AWS Kiro': '/assets/skills/kiro.svg',
  'Git/GitHub': '/assets/skills/github.svg',
  'Azure DevOps': '/assets/skills/azure-devops.svg',
  'Postman': '/assets/skills/postman.svg',
  'Jest': '/assets/skills/jest.svg',
  'Arduino': '/assets/skills/arduino.svg',
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', confidence: 'Go-to' },
      { name: 'TypeScript', confidence: 'Go-to' },
      { name: 'JavaScript', confidence: 'Go-to' },
      { name: 'HTML/CSS', confidence: 'Shipped it' },
      { name: 'Tailwind', confidence: 'Shipped it' },
      { name: 'Vite', confidence: 'Shipped it' },
      { name: 'React Native', confidence: 'Know it' },
      { name: 'Expo', confidence: 'Know it' },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', confidence: 'Go-to' },
      { name: 'C#/.NET', confidence: 'Shipped it' },
      { name: 'GraphQL', confidence: 'Shipped it' },
      { name: 'REST', confidence: 'Go-to' },
      { name: 'Java', confidence: 'Know it' },
      { name: 'Python', confidence: 'Know it' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', confidence: 'Go-to' },
      { name: 'Azure', confidence: 'Know it' },
      { name: 'AWS CDK', confidence: 'Shipped it' },
      { name: 'Docker', confidence: 'Shipped it' },
      { name: 'GitHub Actions', confidence: 'Shipped it' },
      { name: 'AWS Codepipeline', confidence: 'Shipped it' },
      { name: 'Kubernetes', confidence: 'Learning' },
    ],
  },
  {
    title: 'Data & storage',
    skills: [
      { name: 'DynamoDB', confidence: 'Go-to' },
      { name: 'AWS S3', confidence: 'Shipped it' },
      { name: 'PostgreSQL', confidence: 'Shipped it' },
      { name: 'MySQL', confidence: 'Know it' },
      { name: 'MongoDB', confidence: 'Learning' },
    ],
  },
  {
    title: 'AI & coding tools',
    skills: [
      { name: 'Claude', confidence: 'Go-to' },
      { name: 'GitHub Copilot', confidence: 'Go-to' },
      { name: 'Cursor', confidence: 'Learning' },
      { name: 'AWS Kiro', confidence: 'Go-to' },
    ],
  },
  {
    title: 'Testing & tools',
    skills: [
      { name: 'Git/GitHub', confidence: 'Go-to' },
      { name: 'Azure DevOps', confidence: 'Shipped it' },
      { name: 'Postman', confidence: 'Go-to' },
      { name: 'Jest', confidence: 'Shipped it' },
      { name: 'NUnit', confidence: 'Shipped it' },
      { name: 'Arduino', confidence: 'Know it' },
    ],
  },
];

const getFallbackAbbreviation = (skillName: string) => {
  const words = skillName
    .replace(/[/.]/g, ' ')
    .split(' ')
    .filter(Boolean);

  if (words.length >= 2) {
    return `${words[0][0]}${words[1][0]}`.toUpperCase();
  }

  return skillName.slice(0, 2).toUpperCase();
};

const SkillIconCell = ({ skill }: { skill: SkillItem }) => {
  const iconSrc = skill.icon ?? iconBySkill[skill.name];
  const tooltipText = skill.tooltip ?? tooltipBySkill[skill.name];

  const iconNode = iconSrc
    ? (
      <img
        src={iconSrc}
        alt={skill.name}
        className="h-7 w-7 sm:h-8 sm:w-8 object-contain flex-shrink-0"
      />
    )
    : (
      <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-md bg-gray-200 text-[11px] sm:text-xs font-semibold text-gray-700 flex items-center justify-center flex-shrink-0">
        {getFallbackAbbreviation(skill.name)}
      </div>
    );

  if (!tooltipText) {
    return iconNode;
  }

  return (
    <Tooltip title={tooltipText} placement="top">
      <span className="inline-flex">{iconNode}</span>
    </Tooltip>
  );
};

const Skills = () => {
  const { Text } = Typography;

  return (
    <Flex vertical className="m-3 flex-col" id="skills">
      <Text className="text-lg sm:text-xl font-oswald mb-5 text-gray-900 drop-shadow-sm font-semibold">
        Skills and technologies
      </Text>
      <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-5">
        {(Object.keys(legendDotColors) as ConfidenceLevel[]).map(level => (
          <div key={level} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: legendDotColors[level] }}
            />
            <span className="text-xs sm:text-sm font-lato text-gray-700">{level}</span>
          </div>
        ))}
      </div>
      <div
        className="w-full"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'start',
          flexWrap: 'wrap',
          gap: '36px',
        }}
      >
        {skillCategories.map(category => (
          <div
            key={category.title}
            className="bg-white/20 backdrop-blur-md border-white/30 shadow-xl"
            style={{
              border: '0.5px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '12px',
              padding: '1.25rem 1.3rem',
              minWidth: '300px',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: '#374151',
                paddingBottom: '0.7rem',
                marginBottom: '0.85rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.45)',
              }}
            >
              {category.title}
            </div>
            <div className="flex flex-col gap-3">
              {category.skills.map((skill) => {
                const tagStyle = confidenceTagStyles[skill.confidence];
                return (
                  <div key={skill.name} className="flex items-center gap-3 min-w-0">
                    <SkillIconCell skill={skill} />
                    <span className="text-sm sm:text-base font-lato text-gray-900 min-w-0">
                      {skill.name}
                    </span>
                    <span
                      className="ml-auto whitespace-nowrap"
                      style={{
                        fontSize: '12px',
                        padding: '4px 11px',
                        borderRadius: '999px',
                        backgroundColor: tagStyle.background,
                        color: tagStyle.color,
                        fontWeight: 600,
                      }}
                    >
                      {skill.confidence}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Flex>
  );
};

export default Skills;
