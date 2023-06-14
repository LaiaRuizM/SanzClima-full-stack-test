CalcPage.getInitialProps = async ctx => {
  return ctx.req.url;
};

export default function CalcPage(url) {
  const paramValues = Object.values(url.searchParams);
  const stringParamValues = JSON.stringify(paramValues);

  return <h1>Calculate page test: {stringParamValues}</h1>;
}
