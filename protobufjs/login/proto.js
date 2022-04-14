/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  login: {
    nested: {
      LoginReq: {
        fields: {
          user: {
            type: "PBUser",
            id: 1
          }
        }
      },
      LoginRes: {
        fields: {
          code: {
            type: "int64",
            id: 1
          }
        }
      },
      PBUser: {
        fields: {
          uid: {
            type: "string",
            id: 1
          },
          pwd: {
            type: "string",
            id: 2
          },
          age: {
            type: "int64",
            id: 3
          }
        }
      }
    }
  }
});

export { $root as default };
