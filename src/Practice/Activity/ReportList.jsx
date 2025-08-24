import Report from './Report';

const ReportList = ({ works, onMarkComplete }) => {
  return (
    <ul>
      {works.map((work) => (
        <Report
          key={work.id}
          activity={work.activity}
          type={work.type}
          isComplete={work.done}
          onMarkComplete={() => onMarkComplete(work.id)} // ✅ this is good
        />
      ))}
    </ul>
  );
};

export default ReportList;
