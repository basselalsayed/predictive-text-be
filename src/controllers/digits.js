import { getPossibleInputs, send } from '../helpers';

const digitsController = async ({ body: { digits } }, res, next) => {
  try {
    send(200, res, getPossibleInputs(digits));
    next();
  } catch (error) {
    next(error);
  }
};

export default digitsController;
