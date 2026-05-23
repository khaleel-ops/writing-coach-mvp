export type DiagnosticRequest = {
  name?: string;
  emails: [string, string, string];
};

export type DiagnosticResponse = {
  diagnostic: string;
};

export type DiagnosticError = {
  error: string;
};
