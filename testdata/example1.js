const typedMessage = {
  primaryType: 'FooType',
  domain: {
    name: 'FooType',
    version: '1',
  },

  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ],
    FooType: [
      { name: 'fooField1', type: 'string' },
      { name: 'fooField2', type: 'BarType' },
    ],
    BarType: [
      { name: 'barField1', type: 'string' },
    ],
   },
};

module.exports = typedMessage;