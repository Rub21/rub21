class Q {
	int n;
    	boolean valueSet = false;
    	synchronized int get() {
		if (!valueSet)
	    		try wait(); catch(InterruptedException e);
		System.out.println("Obtenido: " + n);
		valueSet = false;
		notify();
		return n;
    	}
    	synchronized void put(int n) {
		if (valueSet)
	    		try wait(); catch(InterruptedException e);
		this.n = n;
		valueSet = true;
		System.out.println("Colocado: " + n);
		notify();
    	}
}
class Producer implements Runnable {
    	Q q;
    	Producer (Q q) {
		this.q =  q;
		new Thread(this, "Producer").start();
    	}
    	public void run() {
		int y = 0;
		while(true) {
	    		q.put(i++);
		}
    	}
}
class Consumer implements Runnable {
    	Q q;
    	Consumer(Q q) {
		this.q = q;
		new Thread(this, "Consumer").start();
    	}
    	public void run() {
		while(true) {
	    		q.get();
		}
    	}
class PC {
    	public static void main(String args[]) {
		Q q = new Q();
		new Producer(q);
		new Consumer(q);
    	}
