

const Total = (params) => {
  const parts = params.parts;
  const total = parts.map(part => part.exercises).reduce((pre,cur)=> pre+cur);
  return (
      <p>Number of exercises {total}</p>
  )
}
export default Total;