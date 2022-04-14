/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  allTypePackage: {
    nested: {
      allType: {
        fields: {
          str: {
            type: "string",
            id: 1
          },
          num32: {
            type: "int32",
            id: 2
          },
          num64: {
            type: "int64",
            id: 3
          },
          float: {
            type: "float",
            id: 4
          },
          double: {
            type: "double",
            id: 5
          },
          bool: {
            type: "bool",
            id: 6
          },
          bytes: {
            type: "bytes",
            id: 7
          },
          custom: {
            type: "customType",
            id: 8
          }
        }
      },
      customType: {
        fields: {
          str1: {
            type: "string",
            id: 1
          },
          flag: {
            type: "bool",
            id: 2
          }
        }
      }
    }
  }
});

export { $root as default };
