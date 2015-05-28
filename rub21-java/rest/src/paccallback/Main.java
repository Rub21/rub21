package paccallback;

//
//interface CallBack {
//
//    void methodToCallBack();
//}

//class CallBackImpl implements CallBack {
//
//    public void methodToCallBack() {
//        System.out.println("I've been called back");
//    }
//}

class Main {

//    public void register(CallBack callback) {
//        for (int i = 0; i < 10000; i++) {
//            System.out.println(i);
//        }
//        callback.methodToCallBack();
//    }
    
        public static void main(String[] args) {
        Main caller = new Main();
        CallBack callBack = new CallBackImpl();
        caller.register(callBack);
    }
}
