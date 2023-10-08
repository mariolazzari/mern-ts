interface IResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export default IResponse;
