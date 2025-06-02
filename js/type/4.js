const STATUS = {
    READY: Symbol('ready'), //准备,
    RUNNING: Symbol('running'), //运行中,
    DONE: Symbol('done'), //完成,
}

let state = STATUS.READY; //初始状态是准备状态,