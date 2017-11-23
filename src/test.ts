import { Logger } from "./index";
import log from "./index";

const a = new Logger();
a.info("hello, world");
a.color = false;
a.info("hello, world");
const b = a.bindPrefix("###");
b.debug("test");

log.warn("hello");
log.error("hello");
log.fatal("end");
