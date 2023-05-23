
const StatisticsLine = ({label,value}) => {
  return (
      <tr>
          <td>{label}</td>
          <td>{value}</td>
      </tr>
  )
};

const Statistics= ({good, neutral, bad}) => {
    const total = () => good+bad+neutral;
    if (total()===0) {
        return <p>No feedback given</p>
    }
    const roundToTwo = (num) =>  Math.round(num*100+Number.EPSILON) /100;

    const average = () => roundToTwo((good-bad)/total() || 0);
    const positivePercentage = () => roundToTwo( (good / total()) * 100) || 0;
    return (
        <table>
            <tbody>
            <StatisticsLine label="good" value={good}></StatisticsLine>
            <StatisticsLine label="neutral" value={neutral}></StatisticsLine>
            <StatisticsLine label="bad" value={bad}></StatisticsLine>
            <StatisticsLine label="total" value={total()}></StatisticsLine>
            <StatisticsLine label="average" value={average()}></StatisticsLine>
            <StatisticsLine label="positivePercentage" value={positivePercentage()+"%"}></StatisticsLine>
            </tbody>
        </table>
    )
};

export default Statistics;