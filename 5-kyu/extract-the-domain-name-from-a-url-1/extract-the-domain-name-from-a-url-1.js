function domainName(url){
  const domain = url.replace(/^(https?:\/\/)?(www\.)?/, "").split('.')[0];
  return domain;
}