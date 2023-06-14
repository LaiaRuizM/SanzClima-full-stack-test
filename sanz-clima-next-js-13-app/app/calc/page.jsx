CalcPage.getInitialProps = async ctx => {
  return ctx.req.url;
};

export default function CalcPage(url) {
  const paramValues = Object.values(url.searchParams);
  const stringParamValues = JSON.stringify(paramValues);

  const calculateSum = () => {
    let calculate = 0.0;

    if (Array.isArray(paramValues)) {
      paramValues.forEach(value => {
        const number = parseFloat(value);
        if (!isNaN(number)) {
          calculate += number;
        }
      });
    }

    return calculate;
  };

  const calculate = calculateSum();

  return (
    <div>
      <p>Sum of numerical arguments and avoiding other types: {calculate}</p>
    </div>
  );
}
