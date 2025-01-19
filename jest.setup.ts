// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom/jest-globals";
import { TextDecoder, TextEncoder } from "util";

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
